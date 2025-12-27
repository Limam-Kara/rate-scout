import { useState } from 'react';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CurrencyOption, COUNTRY_NAMES } from '@/types/quote';

interface CurrencyComboboxProps {
  options: CurrencyOption[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export function CurrencyCombobox({ 
  options, 
  value, 
  onValueChange, 
  placeholder = "Select..." 
}: CurrencyComboboxProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-14 justify-between bg-background border-2 border-border hover:bg-secondary/50 w-full"
        >
          {selectedOption ? (
            <span className="flex items-center gap-2 text-left">
              <span className="text-xl">{selectedOption.flag}</span>
              <span className="font-semibold">{selectedOption.currency}</span>
              <span className="text-muted-foreground text-sm hidden sm:inline">
                {COUNTRY_NAMES[selectedOption.country]}
              </span>
            </span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 bg-popover border border-border z-50" align="start">
        <Command className="bg-popover">
          <CommandInput 
            placeholder="Search currency or country..." 
            className="h-11"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={`${option.currency} ${option.country} ${COUNTRY_NAMES[option.country]}`}
                  onSelect={() => {
                    onValueChange(option.value);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="text-xl mr-2">{option.flag}</span>
                  <span className="font-semibold mr-2">{option.currency}</span>
                  <span className="text-muted-foreground text-sm">
                    {COUNTRY_NAMES[option.country]}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
