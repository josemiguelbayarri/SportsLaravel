<?php
namespace App\Http\Controllers;
use App\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
class AppointmentController extends Controller
{
    public function getAll()
    {
        return Appointment::with('user')->get();
    }
    
    public function create(Request $request)
    {
        $body = $request->all();
        $validator = Validator::make($body, [
            'appointmentDate' => 'required|string',
            'type' => 'required|string'
        ]);
        if($validator->fails()) {
            return response()->json([
                'message' => 'There was a problem creating the appointment.',
                'errors' => $validator->errors(),
            ],400);
        }
        $body['user_id'] = Auth::id();
        $appointment = Appointment::create($body);
        return $appointment;
    }
    public function update(Request $request, $id)
    {
        $body = $request->all();
        $validator = Validator::make($body, [
            'date' => 'required|date',
        ]);
        if($validator->fails()) {
            return response()->json([
                'message' => 'There was a problem creating the appointment.',
                'errors' => $validator->errors(),
            ],400);
        }
        $appointment = Appointment::find($id);
        $appointment->update($body);
    }
    public function delete($id)
    {
        $appointment = Appointment::find($id);
        $appointment->delete();
        return response()->json(['message' => 'Appointment deleted', 'apointment'=>$appointment]);
    }

    public function myAppointments()
    {
        $user_id = Auth::id();
        $appointment = Appointment::where('user_id', $user_id)->get();
        return $appointment;
    }
}