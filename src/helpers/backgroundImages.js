

export const getLocationName = (location="") => {
    if(location.length === 1) {
        return "home"
    }

    const name = location.slice(1).split("/")[0] || location.slice(1)

    return name
}