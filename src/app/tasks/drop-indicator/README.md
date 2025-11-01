# Drop Indicator Line Component

The `Line` component is a versatile visual indicator used to show drop positions
in a drag-and-drop interface. It is highly customizable, allowing you to adjust
its appearance to fit your design needs.

## Props

- **edge**: Specifies the edge where the line will appear. Options are `"top"`,
  `"bottom"`, `"left"`, `"right"`.
- **indent**: Sets the indentation from the edge. Default is `"0px"`.
- **gap**: Defines the gap between the line and the edge. Default is `"0px"`.
- **strokeColor**: Sets the color of the line. Default is `"#1d7afc"`.
- **strokeWidth**: Specifies the width of the line. Default is `"2px"`.
- **type**: Determines the line type. Options are `"terminal"`, `"no-terminal"`,
  `"terminal-no-bleed"`. Default is `"terminal"`.
- **className**: Additional CSS classes for custom styling.

## Usage

Here's how you can use the `Line` component in your project:

```jsx
import { Line } from "./drop-indicator"

const TaskItem = ({ task, index }) => {
  return (
    <li className="text-label-primary/80 relative flex h-10 items-center">
      {/* Other components */}
      <Line edge="bottom" type="terminal-no-bleed" indent="2px" />
    </li>
  )
}
```

In this example, the `Line` component is used to indicate the drop position at
the bottom of a task item. You can customize the `edge`, `type`, and `indent` to
suit your layout needs.

## Examples

- **Horizontal Line at Bottom**:

  ```jsx
  <Line edge="bottom" type="terminal" strokeColor="#ff0000" />
  ```

- **Vertical Line on Left**:
  ```jsx
  <Line edge="left" type="no-terminal" strokeWidth="4px" />
  ```

These examples demonstrate how to customize the `Line` component for different
use cases. Adjust the props to fit your specific design requirements.
