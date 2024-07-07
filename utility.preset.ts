/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

function generateArray(max = 10, min = 1) {
  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}

function generateValue<Key extends PropertyKey, Value>({
  max = 10,
  getKey,
  getValue,
  min = 1,
}: {
  max: number;
  getKey: (v: number) => Key;
  getValue: (v: number) => Value;
  min: number;
}) {
  return generateArray(max, min).reduce((acc, v) => ({ ...acc, [getKey(v)]: getValue(v) }), {}) as Value[];
}

const timeFunctions = generateValue({
  max: 100,
  min: 2,
  getKey: second => `${second}s`,
  getValue: second => `${second * 1000}ms`,
});

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".no-scrollbar::-webkit-scrollbar": { display: "none" },
        ".no-scrollbar": { msOverflowStyle: "none", scrollbarWidth: "none" },

        [[".debug-css *", ".debug-css"] as any]: {
          "@apply bg-red-500/5 outline outline-1 outline-red-500/20": {},
        },

        ".dragging-none": { WebkitUserDrag: "none", userDrag: "none" },
        ".dragging-auto": { WebkitUserDrag: "auto", userDrag: "auto" },

        ".writing-vertical": { writingMode: "vertical-rl", textOrientation: "mixed" },

        ".stack-content": { display: "grid", gridTemplate: "'container'", isolation: "isolate" },
        ".stack-content > *": { gridArea: "container" },

        [[
          "input:-webkit-autofill",
          "input:-webkit-autofill:hover",
          "input:-webkit-autofill:focus",
          "input:-webkit-autofill:active",
        ] as any]: {
          transition: ["background-color 50000s ease-in-out 0s", "color 5000s ease-in-out 0s"].join(", "),
        },
      });
    }),

    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: value => ({
          perspective: value,
        }),
      });
    }),

    plugin(({ matchUtilities }) => {
      matchUtilities(
        {
          "animation-duration": value => ({
            animationDuration: value.toString(),
          }),

          "transition-duration": value => ({
            transitionDuration: value.toString(),
          }),
        },
        { values: { ...timeFunctions, ...defaultTheme.transitionDuration } }
      );

      matchUtilities(
        {
          "animation-delay": value => ({
            animationDelay: value.toString(),
          }),

          "transition-delay": value => ({
            transitionDelay: value.toString(),
          }),
        },
        { values: { ...timeFunctions, ...defaultTheme.transitionDelay } }
      );
    }),
  ],
};
