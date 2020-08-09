<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{

    protected $fillable = ['appointmentDate','type','user_id'];

    public function user()
    {
        return $this->belongsTo('\App\User','user_id','id','users');
    }
}
