import React from "react";



export default function Example({ all }){


    return (
        <div>
            { all.map( (Val) => {
                return Val.meanings.map( (Means) => {
                    return Means.definitions.map( (Def) => {
                        return (
                            <div>
                                { Def.exampl ? ( 
                                    <li className="text-capitalize fs-5 text-start px-3">
                                        { Def.example }
                                    </li>
                                ) : (
                                    ""
                                )}
                            </div>
                        );
                    });
                });
            })};
        </div>
    )
}