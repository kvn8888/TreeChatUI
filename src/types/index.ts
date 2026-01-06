import type { Node, Edge } from '@xyflow/react';

/**
 * Represents a single message in the chat (user or assistant)
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

/**
 * The data payload for each tree node
 * A node can have a user message, assistant message, or both
 */
export interface ChatNodeData {
  userMessage?: Message;
  assistantMessage?: Message;
  isCollapsed: boolean;
}

/**
 * A chat tree node, extending React Flow's Node type
 */
export type ChatNode = Node<ChatNodeData, 'chat'>;

/**
 * Edge connecting parent to child nodes
 */
export type ChatEdge = Edge;

/**
 * TODO(human): Define the generateNodeId function
 *
 * This function creates unique IDs for new nodes in the tree.
 * The ID strategy affects:
 * - Debugging (readable vs opaque IDs)
 * - Persistence (IDs must be stable across sessions)
 * - Collision risk (especially if generating many nodes quickly)
 *
 * @returns A unique string identifier for a new node
 */
export function generateNodeId(): string {
  // TODO(human): Implement your ID generation strategy
  // Options to consider:
  // - crypto.randomUUID() - Built-in, universally unique
  // - Date.now() + Math.random() - Simple but less collision-resistant
  // - nanoid() - Popular library, short IDs, configurable
  // - Incremental counter - Simple but not unique across sessions
  throw new Error('Not implemented');
}
