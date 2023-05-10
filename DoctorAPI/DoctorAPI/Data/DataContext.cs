using DoctorAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DoctorAPI.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { 
        
        
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=doctordb;Trusted_Connection=true;TrustServerCertificate=true;");
        }

        public DbSet<Doctor> Doctors { get; set; }
    }
}
