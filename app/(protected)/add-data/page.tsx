"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";



type FormInput = {
    repourl: string;
    projectname: string;
    githubtoken?: string;
}

const CreatePage = () => {

  return (
    <div className="flex items-center gap-12 h-full justify-center">
    <Image
        src="/bg.png"
        alt="poster"
        width={300} // Set a max width
        height={300} // Set a max height
        style={{
          objectFit: 'contain', // Ensures the image scales proportionally
        }}
        className="rounded-xl "
      />
    <div>
        <div>
            <h1 className="font-semibold text-2xl">Add File or Enter URL</h1>
            <p className="text-sm text-muted-foreground">Upload a file or enter a url to interact uisng VectorVerse</p>
            <div>
                <div className="h-4"></div>
                <div>
                    <form >
                        <Label>Upload File</Label>
                        <div className="h-2"></div>
                        <Input
                            placeholder="Upload File"
                            type="file"
                            accept=".pdf"
                            required
                        />
                        <div className="h-2"></div>
                        <Label>Enter URL</Label>
                        <div className="h-2"></div>
                        <Input
                            placeholder="URL's"
                            type="url"
                        />
                        <div className="h-2"></div>
                        <div className="h-4"></div>
                        <Button type="submit" >Create Project</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreatePage;