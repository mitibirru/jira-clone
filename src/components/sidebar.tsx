import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DottedSeparator } from './dotted-separator';
import Navigation from './navigation';
import { WorkspaceSwitcher } from './workspaces-swticher';

type Props = {};

function Sidebar({}: Props) {
	return (
		<aside className="h-full bg-neutral-100 p-4 w-full">
			<Link href="/">
				<div className="w-full flex items-center gap-2">
					<Image src="/logo.svg" alt="logo" width={48} height={48} />
					<h1 className="font-semibold text-xl">JiraMIT</h1>
				</div>
			</Link>
			<DottedSeparator className="my-4" />
			<WorkspaceSwitcher />
			<DottedSeparator className="my-4" />
            <Navigation />
		</aside>
	);
}

export default Sidebar;
