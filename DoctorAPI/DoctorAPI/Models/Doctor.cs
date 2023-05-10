namespace DoctorAPI.Models
{
    public class Doctor
    {
        public int Id { get; set; }

        public string FirstName { get; set; } = string.Empty;

        public string Surname { get; set; } = string.Empty;

        public int Age { get; set; }
    }
}
