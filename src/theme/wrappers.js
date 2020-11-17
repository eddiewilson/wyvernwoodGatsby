const wrappers = (theme) => {
    return ({
        primary: `
            margin: 0 auto;
            @media (min-width:${theme.breakpoints.values.sm}px){
                margin: 0 3rem;
            }
        `,
    });
}

export default wrappers;