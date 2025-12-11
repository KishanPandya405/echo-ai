 🌟 AI Playground – Frontend Assessment

A frontend-only prototype of an AI interaction interface built using Next.js, TypeScript, Tailwind CSS, and Storybook, following the company's assessment guidelines.

---

 🚀 Live Demo  
👉 [Insert your deployed Vercel URL here]

 📦 GitHub Repository  
👉 [Insert your GitHub repo link here]

 🎨 Figma / XD Design File  
👉 [Insert your Figma or XD link here]

---

 1.  Research

To understand modern AI interaction design patterns, I reviewed several leading AI UI platforms.

 Platforms Reviewed
1. OpenAI Playground  
   - Strong parameter control panel, clean sidebar layout.

2. Anthropic Claude  
   - Simple, natural chat interface with templates.

3. Hugging Face Spaces  
   - Clear slider-based parameter inputs, modular UI components.

4. Microsoft Copilot Lab  
   - Guided prompts and improved UX for beginners.

  Key Features Selected

| Feature from Research               | Implementation in My UI                 |
|-------------------------------------|------------------------------------------|
| Model selector                      | Sidebar dropdown (`ModelSelector`)       |
| Prompt templates                    | Template loader in `PromptEditor`        |
| Parameter sliders                   | `ParametersPanel`                        |
| Chat UI (bubble-style responses)    | `ChatBubble` + `ChatOutput`              |
| Theme switcher                      | `ThemeToggle` using React Context        |

---

 2. 🎨 Design

A clean, simple mockup was created in Figma for layout and component mapping.

 Figma Design: *Insert link here*

 Layout Structure
- Sidebar (Left)  
  Model selector + parameter sliders.
- Main Content (Right)  
  Prompt editor + chat response area.

 Typography
- Tailwind text utilities: `text-sm`, `text-base`, `text-lg`.

 Color System
- Light/Dark theme support using Tailwind `dark:` mode.
- Indigo for primary actions, Slate for backgrounds.

---

  Mapping Figma → Code

| Figma Element               | Component              | Tailwind Classes |
|----------------------------|------------------------|------------------|
| Sidebar card               | ModelSelector          | `rounded-xl border p-3` |
| Parameter sliders          | ParametersPanel        | `space-y-4` |
| Send button                | PromptEditor button    | `bg-indigo-600 text-white rounded-md px-4 py-1.5` |
| Chat bubbles               | ChatBubble             | `bg-indigo-600 text-white` (user) <br> `dark:bg-slate-800 bg-slate-200` (assistant) |
| Page layout                | Layout grid            | `md:grid-cols-[280px_minmax(0,1fr)] gap-4` |

---

 3.  Development

The project uses:

- Next.js App Router  
- React Context for session + theme management  
- Strict TypeScript mode enabled  
- Mock API for listing models and templates  
- Tailwind CSS for styling  
- Storybook for component documentation  

---

 3.1  State Architecture

 ThemeContext
- Toggles light/dark mode  
- Stores preference in `localStorage`  
- Applies `.dark` class to `<html>`

 SessionContext
Handles:
- Selected model  
- Temperature/max tokens  
- Prompt  
- Messages  
- Template loading  
- Mock API fetch

---

 3.2 🛠 Mock API Endpoints

 `/api/models/route.ts`

```ts
export async function GET() {
  return NextResponse.json({
    models: [
      { id: "gpt-3.5", name: "GPT-3.5", description: "Fast model" },
      { id: "gpt-4", name: "GPT-4", description: "Advanced reasoning" },
      { id: "custom", name: "Custom Model", description: "Fine-tuned" },
    ],
  });
}

`/api/templates/route.ts`

``ts
export async function GET() {
  return NextResponse.json({
    templates: [
      { id: "blog-outline", title: "Blog Outline", prompt: "Create an outline for…" },
      { id: "bug-report", title: "Bug Report", prompt: "You are a QA engineer…" },
    ],
  });
}


4. Responsive Behavior

Mobile-first design

Sidebar collapses into vertical stack

Desktop layout uses two-column grid

Buttons and text scale for readability

5.Theme System

Controlled by ThemeContext

Toggles .dark class

Colors defined in globals.css using CSS variables

Tailwind darkMode: "class" enabled

6. Storybook

Stories are included for four core components:

Button

Slider

Modal

ChatBubble

Running Storybook
npm run storybook

Stories are located in:
/stories/

7.Running the Project Locally
Install dependencies
npm install

Start development server
npm run dev

Then open: http://localhost:3000

8.Deployment
To build for production:
npm run build

9. 📁 Project Structure
src/
  app/
    api/
      models/route.ts
      templates/route.ts
    layout.tsx
    page.tsx
  components/
    ThemeToggle.tsx
    ModelSelector.tsx
    PromptEditor.tsx
    ParametersPanel.tsx
    ChatOutput.tsx
    ui/
      Button.tsx
      Slider.tsx
      Modal.tsx
      ChatBubble.tsx
  stories/
    Button.stories.tsx
    Slider.stories.tsx
    Modal.stories.tsx
    ChatBubble.stories.tsx

public/
.storybook/
tailwind.config.js
tsconfig.json
package.json
README.md


10.Known Limitations

No real AI model integration (mock responses only)

Long chat histories not fully optimized

Parameter changes are visual only (no backend logic)