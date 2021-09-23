import { createContext, useContext, ProviderExoticComponent, ProviderProps } from "react";

export type CreateCtx<A = any> = readonly [() => A, ProviderExoticComponent<ProviderProps<A | null>>];

export function createCtx<A = any>(defaultValue = null, strict = true): CreateCtx<A> {
    const ctx = createContext<A | null>(defaultValue);

    const useCtx = (): A => {
        const c = useContext(ctx);

        if(strict && c === undefined) throw new Error("useCtx must be inside a Provider with a value");

        return c;
    }

    return [useCtx, ctx.Provider] as const;
}