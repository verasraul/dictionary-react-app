import React from "react";


export default function({ all }) {


    return(
        <div>
            {all.map( (Val) => {
                return Val.meanings.map( (Means) => {
                    return Means.defnitions.map( (Def) => {
                        return (
                            <div>
                            <li className="text-capitalize fs-5 text-start">
                                { Def.definition }
                            </li>
                            <hr />
                        </div>
                        );
                    });
                });
            })};
        </div>
    );
};