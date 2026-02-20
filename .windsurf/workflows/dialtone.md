---
description: Use Dialtone MCP for all UI development
---

# Dialtone Design System Workflow

**Always use the Dialtone MCP server for UI components and styling.**

## On Startup

1. Connect to the Dialtone MCP server
2. List available Dialtone resources and tools
3. Reference Dialtone components, tokens, and patterns for all UI work

## When Building UI

1. Query Dialtone MCP for available components before creating custom ones
2. Use Dialtone design tokens for colors, spacing, typography, and shadows
3. Follow Dialtone accessibility guidelines
4. Reference Dialtone icon library (Dialtone Icons) instead of other icon sets

## Component Priority

- **Use Dialtone components first** - buttons, inputs, modals, cards, etc.
- **Use Dialtone tokens** - `--dt-color-*`, `--dt-space-*`, `--dt-font-*`
- **Follow Dialtone patterns** - layouts, forms, navigation

## MCP Commands

```
// turbo
List Dialtone resources from MCP server

// turbo  
Query Dialtone component documentation

// turbo
Get Dialtone design tokens
```

## Resources

- Dialtone Docs: https://dialtone.dialpad.com
- Dialtone GitHub: https://github.com/dialpad/dialtone
