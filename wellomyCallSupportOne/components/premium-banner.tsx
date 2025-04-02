import { Button } from "@/components/ui/button"

export function PremiumBanner() {
  return (
    <div className="bg-green-700 text-white p-3 w-full flex flex-col sm:flex-row justify-center items-center">
      <p className="text-sm mr-0 sm:mr-4 mb-2 sm:mb-0 text-center sm:text-left">
        Click here to unlock advanced features, more call time to enjoy a premium experience.
      </p>
      <Button
        variant="secondary"
        size="sm"
        className="bg-green-500 hover:bg-green-600 text-white border-none whitespace-nowrap"
      >
        Upgrade
      </Button>
    </div>
  )
}

