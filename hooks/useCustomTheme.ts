import { SandpackTheme, useSandpackTheme } from "@codesandbox/sandpack-react";
import merge from "lodash/merge";
import { useMemo } from "react";

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

const useCustomTheme = (overrides: DeepPartial<SandpackTheme>) => {
  const { theme, themeId } = useSandpackTheme();

  return useMemo(() => {
    return {
      theme: merge({}, theme, overrides),
      themeId,
    };
  }, [theme, themeId, JSON.stringify(overrides)]);
};

export default useCustomTheme;
