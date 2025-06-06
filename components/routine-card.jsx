"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, Circle, Edit3, Trash2 } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";

export default function RoutineCard({routine, routines, setRoutines}) {
    const handleDeleteRoutine = (routineId) => {
        setRoutines(routines.filter((routine) => routine.id !== routineId));

    }

    const handleToggleComplete = (routineId) => {
       setRoutines(routines.map((routine) => (routine.id === routineId ? {... routine, completed: !routine.completed} : routine)))
    }

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(routine.title);

    const handleSaveEdit =() => {
        const updatedRoutines = routines.map((r) =>
        r.id === routine.id ? {...r, title: editedTitle } : r);
        setRoutines(updatedRoutines);
        setIsEditing(false);
    }


    
    return (
        <Card className={`bg-white/70 backdrop-blur-xs border-0 shadow-lg transition-all duration-200 hover:shadow-xl ${routine.completed ? "opacity-75" : ""}`}>
                            <CardContent className="p-4">
                                <div className="flex gap-4">

                                    <button className="mt-1 transition-colors duration-200" onClick={() => handleToggleComplete(routine.id)}>
                                        {routine.completed ? (
                                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                                        ) : (
                                                <Circle className="w-6 h-6 text-gray-400 hover:text-green-500 transition-colors" />

                                        )}
                                    </button>

                                    <div className="flex gap-2 min-w-2">
                                        {isEditing ? (
                                            <>
                                            <Input
                                            type="text"
                                            value= {editedTitle}
                                            onChange={(e) => setEditedTitle(e.target.value)}
                                            className="border px-2 py-1 rounded w-full"
                                            />
                                            <Button
                                            onClick={handleSaveEdit}
                                            className="text-sm text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                                            >
                                                Save

                                            </Button>
                                           </> 
                                        ) : (
                                            <>
                                        <h3 className={`text-lg font-semibold mb-2  ${routine.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                                            {routine.title}
                                             <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-3">
                                                 {routine.category}
                                            </span>
                                        </h3>
                                       </>
                                        )} 

                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}
                                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                                <Edit3 className="w-4 h-4" />
                                            </Button>

                                            <Button variant="ghost" size="sm" onClick={() => handleDeleteRoutine(routine.id)}
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>

                                        </div>
                                    </div>
                                </div>
                            </CardContent>
        </Card>
    )
}