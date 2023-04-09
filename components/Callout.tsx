import * as React from 'react';

export function Callout({ title, children }) {
  return (
    <div className="callout">
      <strong>{title}</strong>
      <span>{children}</span>
      <style jsx>
        {`
          .callout {
            display: flex;
            flex-direction: column;
            padding: 12px 16px;
            background: #EDECFF;
            border: 1px solid C2C0FF;
            border-radius: 15px;
          }
          .callout :global(p) {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
