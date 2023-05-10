using DoctorAPI.Models;

namespace DoctorAPI.Services
{
    public interface IDoctorService
    {
        Task<List<Doctor>> GetAllDoctors();

        Task<List<Doctor>> AddDoctor(Doctor doctor);

        Task<List<Doctor>> DeleteDoctor(int id);

        Task<List<Doctor>> UpdateDoctor(Doctor request);
    }
}
