/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Fznpx1C6ZOV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"

export default function Tabss() {
  return (
    <Tabs className="w-full md:flex-row flex-col gap-2 " defaultValue="home">
      <TabsList className="flex flex-col">
        <TabsTrigger className="flex items-center gap-2 p-2 rounded-md " value="home">
          
          Home
        </TabsTrigger>
        <TabsTrigger className="flex items-center gap-2 p-2 rounded-md" value="features">
         
          Features
        </TabsTrigger>
        <TabsTrigger className="flex items-center gap-2 p-2 rounded-md" value="pricing">
          
          Pricing
        </TabsTrigger>
        <TabsTrigger className="flex items-center gap-2 p-2 rounded-md" value="about">
          
          About
        </TabsTrigger>
        <TabsTrigger className="flex items-center gap-2 p-2 rounded-md" value="contact">
          
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="p-4">Home Content</div>
      </TabsContent>
      <TabsContent value="features">
        <div className="p-4">Features Content</div>
      </TabsContent>
      <TabsContent value="pricing">
        <div className="p-4">Pricing Content</div>
      </TabsContent>
      <TabsContent value="about">
        <div className="p-4">About Content</div>
      </TabsContent>
      <TabsContent value="contact">
        <div className="p-4">Contact Content</div>
      </TabsContent>
    </Tabs>
  )
}


