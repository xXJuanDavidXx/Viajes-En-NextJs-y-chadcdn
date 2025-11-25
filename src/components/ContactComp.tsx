import TextareaAutosize from "react-textarea-autosize"
import { Input } from "@/components/ui/input"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
} from "@/components/ui/input-group"

export default function Contacto() {
    return (
        <div className="w-full max-w-md bg-slate-900 p-8 rounded-lg shadow-xl">
            <div className="space-y-4">
                <div>
                    <Input
                        type="text"
                        placeholder="Nombre"
                        className="bg-background"
                    />
                </div>

                <div>
                    <Input
                        type="email"
                        placeholder="Email"
                        className="bg-background"
                    />
                </div>

                <div>
                    <TextareaAutosize
                        className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                        placeholder="Escríbenos tu mensaje..."
                        minRows={3}
                    />
                </div>

                <div className="flex justify-center pt-2">
                    <InputGroupButton
                        className="w-48 py-2 bg-white text-black hover:bg-blue-900 hover:text-white transition-colors duration-300 flex items-center justify-center rounded-3xl mx-auto"
                    >
                        Enviar
                    </InputGroupButton>
                </div>
            </div>
        </div>
    )
}

