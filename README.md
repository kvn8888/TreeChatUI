# TreeChatUI

## Plan: Tree-Based LLM Chat UI with Branching (Github Copilot + Claude 4.5 Opus)

A whiteboard-style chat interface where conversations branch into trees. Users can edit messages (creating branches), regenerate AI responses (creating branches), collapse/expand subtrees, delete branches, and navigate via pan/zoom/drag—all persisted locally with a schema ready for future backend integration.

### Steps

1. **Initialize React + TypeScript project with Vite** and install core dependencies: `@xyflow/react` (canvas with pan/zoom/drag), `zustand` + `immer` (state), `dexie` (IndexedDB), `tailwindcss` + `shadcn/ui` (styling).

2. **Define TypeScript data models** in src/types/index.ts: `TreeNode` (id, parentId, position, userMessage, assistantMessage, isCollapsed), `Message` (id, content, role, version), and `TreeEdge` for React Flow connections.

3. **Build Zustand store** in src/stores/chatTreeStore.ts with tree operations: `addNode`, `editUserMessage` (creates branch), `regenerateResponse` (creates branch), `deleteNode` (cascade prune), `toggleCollapse`, and persist middleware for IndexedDB via Dexie.

4. **Create the canvas component** in src/components/canvas/ChatCanvas.tsx using `@xyflow/react` with `panOnDrag`, `zoomOnScroll`, custom node types, MiniMap, and Controls.

5. **Build custom `ChatNode` component** in src/components/canvas/ChatNode.tsx rendering user/assistant message bubbles with action buttons (edit, regenerate, delete, collapse arrow), handling branching UI and collapsed state indicator.

6. **Implement auto-layout utility** in src/utils/layout.ts using `dagre` for initial tree positioning, with manual drag override stored per-node.

### Further Considerations

1. **Collapse behavior**: Should collapsing hide only immediate children, or entire subtree? Recommend subtree with a badge showing hidden node count.

2. **Delete cascade vs re-parent**: When deleting a node, should children be deleted (prune) or re-attached to grandparent? Recommend prune with confirmation modal.

3. **LLM integration prep**: Add adapter interface (`LLMProvider`) now for future API integration, or defer entirely? Recommend stub interface so UI components are ready.