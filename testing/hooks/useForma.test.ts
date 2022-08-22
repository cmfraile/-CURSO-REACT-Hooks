import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForma } from "../../src/hooks";

const main = () => {
    
    test('debe de regresar la información por defecto',() => {
        const iform = {name:'Carlos',email:'carlos@fraile.com'}
        const { result } = renderHook(() => useForma(iform));
        expect(result.current).toEqual({
            name:iform.name,email:iform.email,formState:iform,
            onInputChange:expect.any(Function),
            onResetForm:expect.any(Function)
        });
    });

    test('Comprobemos que funcionen los eventos del formulario',() => {
        //montar el hook,llamar el oninputchange con act,el evento, y el expect (result.current.name y formstate.name === juan);
        const iform = {name:'Carlos',email:'carlos@fraile.com'} ; const nuevonombre = "Juan"
        const rHOOK = renderHook(() => useForma(iform));
        const { onInputChange , onResetForm } = rHOOK.result.current;
        act(() => {onInputChange({target:{name:'name',value:nuevonombre}})});
        expect(rHOOK.result.current).toEqual({
            name:nuevonombre,email:iform.email,formState:{name:'Juan',email:iform.email},
            onInputChange:expect.any(Function),
            onResetForm:expect.any(Function),
        });
        act(() => {onResetForm()});
        expect(rHOOK.result.current).toEqual({
            name:iform.name,email:iform.email,formState:iform,
            onInputChange:expect.any(Function),
            onResetForm:expect.any(Function)
        })
    });

}

describe('comprobaciones sobre el hook useForma',main)