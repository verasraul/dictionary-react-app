import React from "react";



export default function Antonyms( { all } ) {



    return (
        <div>
            { all.map( (Val) => {
                return Val.meanings.map( (Means) => {
                    return Means.definitions.map( (Def) => {
                        return Def.antonyms.map( (Syn) => {
                            <div>
                                <li className="text-capitalize fs-5 mx-4 my-2">
                                    { Syn }
                                </li>
                            </div>
                        });
                    });
                });
            })};
        </div>
    );
};