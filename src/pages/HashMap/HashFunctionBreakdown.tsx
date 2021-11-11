import "./HashFunctionBreakdown.scss";

import React from "react";

const HashFunctionBreakdown = ({ str = "keyname" }: { str?: string }) => {
  let finalHash = 0;
  return (
    <table>
      <tbody>
        {str.split("").map((character, index) => {
          finalHash += character.charCodeAt(0);
          return (
            <tr
              key={`character-${index}`}
              style={
                index === str.length - 1
                  ? { borderBottom: `1px solid black` }
                  : {}
              }
            >
              <td>{index === str.length - 1 ? `+` : ``}</td>
              <td style={{ padding: `0 1em`, fontWeight: `bold` }}>
                {character}
              </td>
              <td style={{ color: `blue` }}>{character.charCodeAt(0)}</td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td>
            <strong style={{ color: `green` }}>{finalHash}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export { HashFunctionBreakdown };
