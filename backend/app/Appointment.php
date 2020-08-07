<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use SoftDeletes;

    protected $fillable = ['AppointmentType','DateAndHour', 'user_id'];

    public function user()
    {
        return $this->hasMany('\App\Appointment');
    }
}
