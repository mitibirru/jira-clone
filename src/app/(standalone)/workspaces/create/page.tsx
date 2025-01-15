import { getCurrent } from '@/features/auth/actions';
import { CreateWorkspaceForm } from '@/features/workspaces/components/create-workspace-form';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {};

const WorkspaceCreatePage = async (props: Props) => {
	const user = await getCurrent();
	if (!user) redirect('/sign-in');

	return (
		<div className="w-full lg:max-w-xl">
			<CreateWorkspaceForm />
		</div>
	);
};

export default WorkspaceCreatePage;
