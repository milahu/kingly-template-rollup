//import { tracer } from "courtesan";

import { createStateMachine } from "kingly";
//const { createStateMachine } = require("kingly");

function updateState(currState, changes) {
  return Object.assign({}, currState, changes[0]);
}

function incCounterAndDisplay(extendedState, eventData, settings) {
  const { count } = extendedState;

  return {
    updates: [{ count: count + 1 }],
    outputs: [
      {
        command: "render",
        params: count + 1
      }
    ]
  };
}

const fsmDef = {
  states: { counting: "" },
  events: ["clicked"],
  initialExtendedState: { count: 0 },
  initialControlState: "counting",
  transitions: [
    {
      from: "counting",
      event: "clicked",
      to: "counting",
      action: incCounterAndDisplay
    }
  ],
  updateState
};

// You can open the console, and have a look at
// the console message, or the courtesan dev tool
// cf. https://chrome.google.com/webstore/search/courtesan
const settings = {
  debug: { console },
  //devTool: { tracer }
};
const fsm = createStateMachine(fsmDef, settings);

const spanEl = document.getElementById("counter-value");

document.getElementById("counter-button").addEventListener("click", function() {
  // Translate user inputs into commands
  const commands = fsm({ clicked: void 0 });
  // Execute the commands - here only one command: render
  commands.forEach(({ command, params }) => {
    spanEl.innerHTML = `${params}`;
  });
});
