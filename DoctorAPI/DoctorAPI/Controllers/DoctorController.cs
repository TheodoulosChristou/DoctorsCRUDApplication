using DoctorAPI.Models;
using DoctorAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DoctorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {

        public readonly IDoctorService _service;

        public DoctorController(IDoctorService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<List<Doctor>>> GetAllDoctors()
        {
            var doctors = await _service.GetAllDoctors();
            return Ok(doctors);

        }

        [HttpPost]
        public async Task<ActionResult<List<Doctor>>> AddDoctor(Doctor doctor)
        {
            var doctors = await _service.AddDoctor(doctor);

            return Ok(doctors);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Doctor>>> DeleteDoctor(int id)
        {
            var doctors = await _service.DeleteDoctor(id);
            if(doctors == null)
            {
                return NotFound("Doctor with ID " + id + " not found in the Database");
            } else
            {
                return Ok(doctors);
            }
        }

        [HttpPut]
        public async Task<ActionResult<List<Doctor>>> UpdateDoctor(Doctor doctor)
        {
            var doctors = await _service.UpdateDoctor(doctor);

            if(doctors == null)
            {
                return NotFound("Cant Update Doctor");
            } else
            {
                return Ok(doctors);
            }
        }
    }
}
