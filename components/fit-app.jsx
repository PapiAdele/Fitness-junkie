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
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [newRoutine, setNewRoutine] = useState({
        id: Date.now(),
        title: '',
        category: 'Upper Body',
        completed: false
    });

    
    const filteredRoutines = selectedCategory === "All"
    ? routines : routines.filter(r => r.category === selectedCategory);


    
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

            <select className="mb-4 px-3 py-2 border-2 rounded mx-auto font-bold text-xl hover:bg-blue-500 hover:text-white"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)} 
    >
        <option value="All">All Categories</option>
        <option value="Upper Body">Upper Body</option>
        <option value="Lower Body">Lower Body</option>
        <option value="Cardio">Cardio</option>
        <option value="Abs">Abs</option>

    </select>

            {
                routines.length === 0 ? (
                    <NoRoutine />
                ) : (

                filteredRoutines.map(routine => (
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