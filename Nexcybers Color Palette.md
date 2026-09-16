# Nexcybers — Paleta de colores

## Modo oscuro (dark)

| Uso | Variable | Hex/RGBA |
|---|---|---|
| Fondo base | `--bg` | `#06080c` |
| Fondo alterno 1 | `--bg-1` | `#090c12` |
| Fondo alterno 2 | `--bg-2` | `#0d1118` |
| Panel | `--panel` | `#11161f` |
| Panel alterno | `--panel-2` | `#161c27` |
| Borde sutil | `--line` | `rgba(255,255,255,0.08)` |
| Borde marcado | `--line-2` | `rgba(255,255,255,0.14)` |
| Texto principal | `--fg` | `#eef2f6` |
| Texto suave | `--fg-soft` | `#aab3c0` |
| Texto mute (acento claro) | `--fg-mute` | `#e6f7ff` |
| **Celeste principal / CTA** | `--gold` | `#00bffe` |
| Celeste principal (hover) | `--gold-soft` | `#5dd6ff` |
| Azul técnico/datos | `--blue` | `#2f7bff` |
| Azul técnico suave | `--blue-soft` | `#6aa6ff` |
| Cian | `--cyan` | `#6ff0ff` |
| Glow celeste | `--gold-glow` | `rgba(0,191,254,0.45)` |
| Glow azul | `--blue-glow` | `rgba(47,123,255,0.42)` |

**Grilla animada ("Let's talk"):** cicla entre `#6ff0ff` (cian) → `#00bffe` (celeste principal) → `#6aa6ff` (azul suave), todos tonos celestes claros.

## Modo claro (light)

| Uso | Variable | Hex/RGBA |
|---|---|---|
| Fondo base | `--bg` | `#dbe9f7` |
| Fondo alterno 1 | `--bg-1` | `#cfe0f2` |
| Fondo alterno 2 | `--bg-2` | `#c3d7ee` |
| Panel | `--panel` | `#d6e6f6` |
| Panel alterno | `--panel-2` | `#cadef2` |
| Borde sutil | `--line` | `rgba(15,45,80,0.12)` |
| Borde marcado | `--line-2` | `rgba(15,45,80,0.22)` |
| Texto principal | `--fg` | `#0d2238` |
| Texto suave | `--fg-soft` | `#3c5975` |
| Texto mute | `--fg-mute` | `#29597c` |
| **Celeste principal / CTA** | `--gold` | `#0091c9` |
| Celeste principal (hover) | `--gold-soft` | `#007bab` |
| Azul técnico/datos | `--blue` | `#2f6fdb` |
| Azul técnico suave | `--blue-soft` | `#1d54ad` |
| Cian (= celeste principal) | `--cyan` | `#0091c9` |
| Glow celeste | `--gold-glow` | `rgba(0,145,201,0.25)` |
| Glow azul | `--blue-glow` | `rgba(47,111,219,0.22)` |

**Grilla animada ("Let's talk"):** cicla entre `#0091c9` (celeste principal) → `#0f2d50` (azul oscuro navy) → `#1d3a63` (azul oscuro navy alterno).

## Otros colores fijos (no cambian por tema)
- Crítico: `#ff6b6b` sobre `rgba(244,46,46,0.16)`
- Alto: usa `--gold-soft` sobre `rgba(244,179,46,0.16)`
- Activo: usa `--cyan` sobre `rgba(56,225,255,0.14)`

## Scope "Book a session" (`body.sec-green`)
Las páginas de agendar reemplazan el acento celeste por un acento propio, distinto según tema:

| Variable | Dark | Light |
|---|---|---|
| `--gold` | `#06E094` | `#C6185C` |
| `--gold-soft` | `#3ef0b0` | `#A5134C` |
| `--gold-bg` | `#0A6B49` | `#C6185C` |
| `--cyan` | `#06E094` | `#C6185C` |
| `--gold-glow` | `rgba(6,224,148,.42)` | `rgba(198,24,92,.25)` |

El magenta `#C6185C` da 5.77:1 sobre el fondo claro y detrás de texto blanco (AA). El header conserva los acentos celestes del sitio en estas páginas; la única excepción es `.btn-book`, que sigue el color del scope (verde en dark, magenta en light — el hover del botón en modo claro es `#C6185C` en todas las páginas, no solo en las de agendado).

**Card de agendado (`.contact-info-card` en `body.sec-green`):** todo su texto es `#fff` fijo en ambos temas. En light su fondo es `--gold` (mismo hex que el botón primario); en dark queda en `--gold-bg` `#0A6B49` — el `#06E094` del botón con texto blanco da 1.9:1 y sería ilegible.
