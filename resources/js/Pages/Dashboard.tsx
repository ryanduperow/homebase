import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Home, Heart } from 'lucide-react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-family-800">
                    Family Dashboard
                </h2>
            }
        >
            <Head title="Family Dashboard - HomeBase" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Welcome Card */}
                    <Card className="mb-8 bg-gradient-to-br from-white to-family-50 border-family-200">
                        <CardHeader>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-8 bg-gradient-to-b from-family-500 to-family-600 rounded-full"></div>
                                <CardTitle className="text-family-800 flex items-center gap-2">
                                    <Home className="h-5 w-5 text-family-600" />
                                    Welcome Home!
                                </CardTitle>
                            </div>
                            <CardDescription className="text-family-700">
                                Your family's central hub for staying organized and connected
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-family-800 leading-relaxed mb-4">
                                Welcome to your family dashboard! This fresh and calming space is designed to bring your family closer together.
                            </p>
                            <div className="flex gap-2">
                                <Badge variant="secondary" className="bg-family-100 text-family-800 border-family-300">
                                    <Heart className="h-3 w-3 mr-1" />
                                    Family First
                                </Badge>
                                <Badge variant="outline" className="border-family-400 text-family-700">
                                    <Users className="h-3 w-3 mr-1" />
                                    Stay Connected
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-gradient-to-br from-white to-family-50 border-family-200 hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-family-800 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-family-600" />
                                    Family Calendar
                                </CardTitle>
                                <CardDescription className="text-family-700">
                                    Keep track of everyone's schedule
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-family-800 mb-4">View upcoming events and appointments</p>
                                <Button className="w-full bg-family-600 hover:bg-family-700 text-white">
                                    View Calendar
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-white to-warm-50 border-warm-200 hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-family-800 flex items-center gap-2">
                                    <Users className="h-5 w-5 text-warm-600" />
                                    Family Members
                                </CardTitle>
                                <CardDescription className="text-family-700">
                                    Manage your household
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-family-800 mb-4">Add family members and assign roles</p>
                                <Button variant="outline" className="w-full border-family-400 text-family-700 hover:bg-family-50">
                                    Manage Family
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-white to-family-100 border-family-200 hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                                <CardTitle className="text-family-800 flex items-center gap-2">
                                    <Heart className="h-5 w-5 text-family-600" />
                                    Family Moments
                                </CardTitle>
                                <CardDescription className="text-family-700">
                                    Capture precious memories
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-family-800 mb-4">Share photos and create family albums</p>
                                <Button variant="outline" className="w-full border-family-400 text-family-700 hover:bg-family-50">
                                    View Memories
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
