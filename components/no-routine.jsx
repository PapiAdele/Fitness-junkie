import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function NoRoutine(){
    return(
        <Card className="bg-white/70 backdrop-blur-none border-0 shadow-lg">
                        <CardContent className="p-12 text-center">
                            <div className="text-gray-400 mb-4">
                                <CheckCircle2 className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No routine yet</h3>
                            <p className="text-gray-700">Add a new routine to get started</p>
                        </CardContent>
                    </Card>
    )
}