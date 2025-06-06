"use client";

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";



export default function CreateRoutineDialogue({isDialogOpen, setIsDialogOpen, newRoutine, setNewRoutine, setRoutines, routines}){
    
    const handleCreateRoutine = () => {
        if (newRoutine.title.trim()) {
            const newRoutineToAdd = {
                id: Date.now(),
                title: newRoutine.title,
                category: newRoutine.category,
                completed: false,
            };
            setRoutines([newRoutineToAdd, ...routines]);
            setNewRoutine({title: "", category: 'Upper Body'})
            setIsDialogOpen(false);
        }

    
    }
    
   
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Create New Routine</DialogTitle>
                                <div>
                                    <div className="my-4">
                                        <Input
                                        id="title"
                                        placeholder="Enter Routine Title..."
                                        value= {newRoutine.title}
                                            onChange= {(event) => setNewRoutine({...newRoutine, title: event.target.value})}
                                        />
                                    </div>

                                    <div className="my-4">
                                        <label htmlFor="category" className="block mb-2 font-medium">Select Category</label>
                                        <select
                                            id="category"
                                            className="w-full border p-2 rounded"
                                            value={newRoutine.category}
                                            onChange={(e) => setNewRoutine({ ...newRoutine, category: e.target.value })}
                                        >
                                            <option value="Upper Body">Upper Body</option>
                                            <option value="Lower Body">Lower Body</option>
                                            <option value="Abs">Abs</option>
                                            <option value="Cardio">Cardio</option>
                                        </select>
                                    </div>

        
                                    <div>
                                        <div className="flex gap-2 pt-4">
                                            <Button className="flex-1" onClick={handleCreateRoutine}>
                                            Create Routine</Button>
        
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
        
    );
}