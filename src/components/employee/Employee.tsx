import React from 'react';
import {ICandidate} from "../../models";
import {useNavigate} from "react-router-dom";

interface CandidateProps {
    candidate: ICandidate
}

export function Employee(props: CandidateProps) {
    const navigator = useNavigate();
    return (
        <div className={"border py-2 px-4 rounded flex flex-row items-center mb-2 justify-between"}>
            <div>
                {props.candidate.firstname} {props.candidate.lastname}
            </div>
            <div>
                <button className={"bg-red-500 text-white py-1 px-2 rounded-full hover:bg-red-600"} onClick={() => {
                    navigator(`/employee/${props.candidate.id}`);
                }}> Подробнее
                </button>
            </div>
        </div>
    )
}