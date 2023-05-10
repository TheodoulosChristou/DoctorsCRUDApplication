using DoctorAPI.Data;
using DoctorAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DoctorAPI.Services
{
    public class DoctorService : IDoctorService
    {
        public readonly DataContext _context;
        public DoctorService(DataContext context) { 
            _context = context;
        }
        public async Task<List<Doctor>> GetAllDoctors()
        {
            var doctors = await _context.Doctors.ToListAsync();
            return doctors;
        }

        public async Task<List<Doctor>> AddDoctor(Doctor doctor)
        {
            _context.Doctors.Add(doctor);
            await _context.SaveChangesAsync();
            return await _context.Doctors.ToListAsync();
        }

        public async Task<List<Doctor>> DeleteDoctor(int id)
        {
            var doctor = await _context.Doctors.FindAsync(id);
            if(doctor == null)
            {
                return null;
            } else
            {
                _context.Doctors.Remove(doctor);
                await _context.SaveChangesAsync();
                return await _context.Doctors.ToListAsync() ;
            }
        }

        public async Task<List<Doctor>> UpdateDoctor(Doctor request)
        {
            var doctor = _context.Doctors.Find(request.Id);

            if(doctor == null)
            {
                return null;
            } else
            {
                doctor.FirstName = request.FirstName;
                doctor.Surname = request.Surname;
                doctor.Age = request.Age;

                await _context.SaveChangesAsync();
                return await _context.Doctors.ToListAsync();
            }
        }
    }
}
