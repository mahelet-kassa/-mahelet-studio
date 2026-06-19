# Lightroom Classic → Mahelet Studio (step by step)

If you don't see these options yet, that's normal — you need to **create the folders** and **save the export presets** once. After that, they show up every time.

---

## Part 1: Create folders in Lightroom (one time)

Lightroom does **not** come with a "Maheletstudio" folder. You create it.

1. Open **Lightroom Classic**
2. On the **left panel**, find **Folders**
3. Click the **+** next to Folders (or right-click in the folder area → **Add Folder**)
4. Create or choose a folder on your computer, for example:
   ```
   Pictures/Maheletstudio/
   ```
5. Inside that folder, create 3 subfolders on your computer (in File Explorer):
   - `2026 Graduation`
   - `Couples`
   - `Portraits`
6. In Lightroom, click the **refresh** icon next to Folders (or restart Lightroom) so the subfolders appear under **Maheletstudio**

You should now see:
```
Folders
  └── Maheletstudio
        ├── 2026 Graduation
        ├── Couples
        └── Portraits
```

**Drag your photos** into the right subfolder in Lightroom.

---

## Part 2: Create export presets (one time per category)

### Open the Export window

1. Click **one photo** (any photo) in Lightroom
2. Top menu: **File → Export…**  
   (Not "Export with Preset" yet — that appears *after* you save a preset)

### Left side of the Export window

On the **left side** of the Export dialog you should see:
- A list of presets (maybe "Burn Full-Sized JPEGs", etc.)
- At the bottom: **Add** button

If you don't see the left panel, widen the Export window or look for a **preset list** on the left edge.

---

## Part 3: Settings for each preset

Scroll through the **right side** of the Export window and set these:

### At the top — Export Location
| Field | What to choose |
|-------|----------------|
| **Export To** | **Specific folder** (dropdown) |
| **Choose…** | Click and pick the website folder (see table below) |

### File Settings
| Field | Value |
|-------|-------|
| **Image Format** | JPEG |
| **Quality** | 80 |
| **Color Space** | sRGB |

### Image Sizing
| Field | Value |
|-------|-------|
| **Resize to Fit** | **Width & Height** (check the box) |
| **W** | `1600` |
| **H** | leave empty |
| **Don't Enlarge** | ✓ checked |

### Output Sharpening
| Field | Value |
|-------|-------|
| **Sharpen For** | Screen |
| **Amount** | Standard |

### File Naming (optional)
| Field | Value |
|-------|-------|
| **Rename To** | Custom Name |
| **Custom Name** | `photo` |
| **Start Number** | `39` (or next number after your last photo) |

---

## Part 4: Save each preset (this is the important step)

After settings are correct:

1. Click **Add** (bottom left of Export window)
2. Name the preset exactly:
   - `Mahelet — 2026 Graduation`
   - `Mahelet — Portraits`
   - `Mahelet — Couples`
3. Click **Create**

Repeat for all 3, changing only the **export folder**:

| Preset name | Export folder (click Choose…) |
|-------------|-------------------------------|
| Mahelet — 2026 Graduation | `c:\Users\mahel\Documents\Mahelet-Work-Space\gaze-voyage\public\images\2026 Graduation\` |
| Mahelet — Portraits | `c:\Users\mahel\Documents\Mahelet-Work-Space\gaze-voyage\public\images\Portraits\` |
| Mahelet — Couples | `c:\Users\mahel\Documents\Mahelet-Work-Space\gaze-voyage\public\images\Couples\` |

---

## Part 5: How to export (every time after presets exist)

1. In Lightroom, open **Maheletstudio →** pick subfolder (e.g. **2026 Graduation**)
2. Select the photos you want on the website
3. **File → Export…**
4. On the **left**, click your preset (e.g. **Mahelet — 2026 Graduation**)
5. Click **Export** (bottom right)

**Alternative:** After using a preset once:
- **File → Export with Previous Export Settings** (keyboard: **Ctrl + Alt + Shift + E**)

---

## Part 6: Update the website (in Cursor)

Open terminal in your project folder and run:

```bash
npm run photos:optimize
npm run photos:sync
npm run dev
```

Then open http://localhost:5173/gallery in your browser.

---

## "I don't see…" — quick fixes

| Problem | Fix |
|---------|-----|
| No **Maheletstudio** folder | Create it in File Explorer, then **Add Folder** in Lightroom |
| No **Export** in File menu | Make sure you're in **Library** or **Develop** module (not Book/Slideshow) |
| No **Add** button for presets | Open **File → Export…** — Add is bottom **left** of that window |
| No **Export with Preset** menu item | That's normal — use **File → Export…** and pick preset on the left |
| Can't find **Specific folder** | Top of Export dialog → **Export To** dropdown → choose **Specific folder** |
| **Resize to Fit** greyed out | Check the **Resize to Fit** checkbox first, then set Width |

---

## Still stuck?

Tell me which step you're on, for example:
- "I don't see Folders on the left"
- "I don't see the Add button"
- "I don't see Specific folder"

And I can walk you through that exact screen.
