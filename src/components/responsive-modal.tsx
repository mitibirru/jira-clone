import { ReactNode } from 'react';
import { useMedia } from 'react-use';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Drawer, DrawerContent } from '@/components/ui/drawer';

type Props = {
	children: ReactNode;
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

function ResponsiveModal({ children, onOpenChange, open }: Props) {
	const isDesktop = useMedia('(min-width: 1024px)', true);

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto max-h-[85vh] hide-scrollbar">{children}</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer open={open} onOpenChange={onOpenChange}>
			<DrawerContent>
				<div className="overflow-y-auto max-h-[85vh] hide-scrollbar">{children}</div>
			</DrawerContent>
		</Drawer>
	);
}

export default ResponsiveModal;
