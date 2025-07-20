import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Family Dashboard
                </h2>
            }
        >
            <Head title="Family Dashboard - HomeBase" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            Welcome to your family dashboard! Here you can manage your household and stay connected with your family.
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
