type ReactLoadingSetter = React.Dispatch<React.SetStateAction<boolean>>;

export namespace Api {
    const fetchOptions = {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        },
    } 

    const baseUrl = 'http://localhost:8080';
      
    export function fetchList<T>(resource: string, setter: React.Dispatch<React.SetStateAction<T[]>>, setLoading: ReactLoadingSetter) {
        fetch(`${baseUrl}/${resource}/listar`, fetchOptions)
            .then((res) => res.json())
            .then((data) => {
                setter(data);
                setLoading(false);                
             }); 
    }

    export function fetchTotal(resource: string, setter: React.Dispatch<React.SetStateAction<number>>) {
        fetch(`${baseUrl}/${resource}/total`, fetchOptions)
            .then((res) => res.json())
            .then((data) => {
                setter(data);
            }); 
    }

    export function fetchDetails<T>(id: number, resource: string, setter: React.Dispatch<React.SetStateAction<T | undefined>>, setLoading: ReactLoadingSetter) {
        fetch(`${baseUrl}/${resource}/${id}`, fetchOptions)
            .then((res) => res.json())
            .then((data) => {
                setter(data);
                setLoading(false);
            }); 
    }
}