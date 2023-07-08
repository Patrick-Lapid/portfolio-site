import React from 'react'
import { useProcessContext } from '../context/processes'

const WindowManager = () => {

    const {processes} = useProcessContext()

    return (
        <>
            {Object.entries(processes).map(([id, { Component, name }]) => {
                return (
                    <Component id={id} name={name} />
                );
            })}
        </>
    );
}

export default WindowManager;