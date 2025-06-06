"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import NoRoutine from "./no-routine";
import RoutineCard from "./routine-card";
import CreateRoutineDialogue from "./create-routine-dialogue";

export default function FitApp() {
    const [isDialogOpen, setIsDialogOpen] = useState (false)
    const [routines, setRoutines] = useState([])
    const [newRoutine, setNewRoutine] = useState({
        id: Date.now(),
        title: '',
        category: 'Upper Body',
        completed: false
    });
    
    return(
        <>
        <div className="mb-8 text-center">
            <Button size="lg" className=" text-white shadow-lg bg-linear-to-r from-blue-500 to-purple-500 hover:cursor-pointer hover:to-purple-700 "
                onClick={() => setIsDialogOpen(true)} >
                <Plus className="w-5 h-5 mr-2" />
                Add New Routine
            </Button>

            <CreateRoutineDialogue
             isDialogOpen={isDialogOpen} 
             setIsDialogOpen={setIsDialogOpen}
             newRoutine={newRoutine}
             setNewRoutine={setNewRoutine}
             setRoutines={setRoutines}
             routines={routines}
             />
        </div>

        <div className="space-y-4  max-w-lg mx-auto">
            {
                routines.length === 0 ? (
                    <NoRoutine />
                ) : (

                routines.map(routine => (
                        <RoutineCard 
                        key={routine.id}
                        routines={routines}
                        setRoutines={setRoutines}
                        routine={routine}
                        
                        />
                    )
                ))
            
            }
        </div>
        
        </>
    )
}