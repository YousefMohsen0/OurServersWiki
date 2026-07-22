<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'

interface ScrapeEntry {
  label: string
  sources: Array<{ name: string; server: string; sd?: boolean }>
}

const props = defineProps<{
  data: string
  cornerLabel?: string
}>()

// Parse the data attribute format: "SiteName : (Source1, Server1), (Source2, Server2);"
const entries = computed<ScrapeEntry[]>(() => {
  return props.data
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && line.includes(':'))
    .map(line => {
      const colonIdx = line.indexOf(':')
      const label = line.substring(0, colonIdx).trim()
      const rest = line.substring(colonIdx + 1).trim().replace(/;$/, '')
      const sources = rest.split('),').map(s => {
        s = s.trim().replace(/^\(/, '').replace(/\)$/, '')
        const parts = s.split(',').map(p => p.trim())
        const name = parts[0] || ''
        const server = parts.length > 1 ? parts[1] : ''
        const sd = parts.some(p => p.toLowerCase() === 'sd')
        return { name, server, sd }
      })
      return { label, sources }
    })
})

// Build the list of unique source names across all entries
const allSources = computed<string[]>(() => {
  const seen = new Set<string>()
  for (const entry of entries.value) {
    for (const src of entry.sources) {
      if (src.name) seen.add(src.name)
    }
  }
  return Array.from(seen)
})

function getCellTooltip(entry: ScrapeEntry, src: string): string {
  const source = entry.sources.find(s => s.name === src)
  if (!source || !source.server) return ''
  const sd = source.sd ? ' (SD)' : ''
  return `${source.server}${sd}`
}

// Drag to scroll
const wrapRef = ref<HTMLElement | null>(null)
const canScrollRight = ref(false)
const isDragging = ref(false)
let isPending = false
let startX = 0
let scrollStart = 0
let pendingPointerId = -1

const SCROLL_END_PX = 2
const DRAG_THRESHOLD_PX = 5

function checkScroll() {
  const el = wrapRef.value
  if (!el) return
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - SCROLL_END_PX
}

function isTextTarget(e: PointerEvent) {
  const target = e.target as Node | null
  if (!target) return false
  const node = target.nodeType === Node.TEXT_NODE ? target.parentElement : target as Element
  if (!node) return false
  const style = window.getComputedStyle(node as Element)
  return style.userSelect !== 'none' && style.cursor !== 'default' || (node as Element).closest('td.site-name, th') !== null
}

function onPointerDown(e: PointerEvent) {
  if (e.button !== 0) return
  const el = wrapRef.value
  if (!el) return
  if (isTextTarget(e)) return
  isPending = true
  startX = e.clientX
  scrollStart = el.scrollLeft
  pendingPointerId = e.pointerId
}

function onPointerMove(e: PointerEvent) {
  const el = wrapRef.value
  if (!el) return
  if (isPending && window.getSelection()?.type === 'Range') {
    isPending = false
    return
  }
  if (isPending && Math.abs(e.clientX - startX) > DRAG_THRESHOLD_PX) {
    isPending = false
    isDragging.value = true
    el.setPointerCapture(pendingPointerId)
  }
  if (!isDragging.value) return
  el.scrollLeft = scrollStart - (e.clientX - startX)
}

function onPointerUp(e: PointerEvent) {
  isPending = false
  isDragging.value = false
  if (wrapRef.value) {
    wrapRef.value.releasePointerCapture(e.pointerId)
  }
}

onMounted(() => {
  checkScroll()
  useEventListener(wrapRef, 'scroll', checkScroll, { passive: true })
  useEventListener(window, 'resize', checkScroll, { passive: true })
})
</script>

<template>
  <div class="scrape-table-outer">
    <div
      ref="wrapRef"
      class="scrape-table-wrap"
      :style="{ cursor: isDragging ? 'grabbing' : 'auto', userSelect: isDragging ? 'none' : 'auto' }"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <table class="scrape-table">
        <colgroup>
          <col />
          <col v-for="src in allSources" :key="src" class="col-cell" />
        </colgroup>
        <thead>
          <tr>
            <th class="corner">
              {{ cornerLabel ?? 'المصادر' }}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style="display:inline-block;vertical-align:middle;margin-left:4px;color:inherit">
                <path fill="currentColor" d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </th>
            <th v-for="src in allSources" :key="src" class="source-header">
              <span>{{ src }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries" :key="entry.label">
            <td class="site-name">{{ entry.label }}</td>
            <td
              v-for="src in allSources"
              :key="src"
              class="cell"
              :class="{
                active: entry.sources.some(s => s.name === src && !s.sd),
                'active-sd': entry.sources.some(s => s.name === src && s.sd),
              }"
              :data-tooltip="getCellTooltip(entry, src)"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="canScrollRight" class="scroll-indicator">
      <span class="i-lucide-chevron-right" />
    </div>
  </div>
</template>

<style>
.scrape-table-outer {
  position: relative;
  margin: 16px 0;
  direction: ltr;
}

.scrape-table-wrap {
  overflow-x: auto;
  max-width: 100%;
}

.scroll-indicator {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, transparent, var(--vp-c-bg) 70%);
  pointer-events: none;
  color: var(--vp-c-text-2);
  font-size: 20px;
  animation: pulse-right 1.5s ease-in-out infinite;
}

@keyframes pulse-right {
  0%, 100% { opacity: 0.5; transform: translateX(0); }
  50% { opacity: 1; transform: translateX(4px); }
}

/* Override VitePress .vp-doc table/tr/th/td defaults */
.scrape-table {
  display: table !important;
  table-layout: fixed;
  border-collapse: separate !important;
  border-spacing: 0;
  white-space: nowrap;
  width: max-content;
  overflow: visible !important;
  margin: 0 !important;
  border: 2px solid #3d3d3d;
  border-radius: 8px;
  font-size: 0.9em;
}

.scrape-table th {
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-weight: 600;
  padding: 8px 12px;
  border-bottom: 2px solid #3d3d3d;
  white-space: nowrap;
  text-align: start;
}

.scrape-table th.corner {
  min-width: 100px;
}

.scrape-table th.source-header {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  height: 120px;
  text-align: center;
  font-size: 0.85em;
}

.scrape-table td {
  padding: 4px;
  border-bottom: 1px solid #3d3d3d;
  text-align: center;
}

.scrape-table tr:last-child td {
  border-bottom: none;
}

.scrape-table td.site-name {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  padding: 8px 12px;
  text-align: start;
  white-space: nowrap;
}

.scrape-table td.cell {
  width: 30px;
  min-width: 30px;
  position: relative;
}

.cell-content {
  display: block;
  width: 100%;
  height: 100%;
}

.scrape-table td.cell[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 100;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  pointer-events: none;
}

.scrape-table td.cell[data-tooltip]:hover::before {
  content: '';
  position: absolute;
  bottom: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--vp-c-divider);
  z-index: 100;
  pointer-events: none;
}

.scrape-table td.cell.active {
  background-color: var(--vp-c-brand-1);
}

.scrape-table td.cell.active-sd {
  background-color: #e11d48;
}

.scrape-table tr:nth-child(even) td {
  background-color: transparent !important;
}

.scrape-table tr:nth-child(even) td.active {
  background-color: var(--vp-c-brand-1) !important;
}

.scrape-table tr:nth-child(even) td.active-sd {
  background-color: #e11d48 !important;
}

.dark .scrape-table td.cell.active {
  background-color: var(--vp-c-brand-1);
}

.dark .scrape-table td.cell.active-sd {
  background-color: #fca5a8;
}

.dark .scrape-table tr:nth-child(even) td.active {
  background-color: var(--vp-c-brand-1) !important;
}

.dark .scrape-table tr:nth-child(even) td.active-sd {
  background-color: #fca5a8 !important;
}

.amoled .scrape-table td.cell.active {
  background-color: var(--vp-c-brand-1);
}

.amoled .scrape-table td.cell.active-sd {
  background-color: #ff4757;
}

.amoled .scrape-table tr:nth-child(even) td.active {
  background-color: var(--vp-c-brand-1) !important;
}

.amoled .scrape-table tr:nth-child(even) td.active-sd {
  background-color: #ff4757 !important;
}
</style>