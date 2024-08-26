import { useState, useEffect } from "react";

import { RESOURCE } from "./constants";
import { Api } from "./api";
import { Entity } from "./models";

export function useResource<T extends Entity>(resourceType: RESOURCE) {
    const [resource, setResource] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Api.fetchList(resourceType, setResource, setLoading);
    }, []);

    return {
        resource,
        loading,
    }
}

export function useResourceDetails<T extends Entity>(id: number, resourceType: RESOURCE) {
    const [resource, setResource] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Api.fetchDetails(id, resourceType, setResource, setLoading);
    }, []);

    return {
        resource,
        loading,
    }
}