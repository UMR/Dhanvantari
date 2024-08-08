using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Patient.Domain;

public partial class DhanvantariDbContext : DbContext
{
    public DhanvantariDbContext()
    {
    }

    public DhanvantariDbContext(DbContextOptions<DhanvantariDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserPhoto> UserPhotos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=(local);Initial Catalog=DhanvantariDB;User Id=sa;Password=123456;Encrypt=false;TrustServerCertificate=true;MultipleActiveResultSets=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("User");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateOfBirth).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.FirstName).HasMaxLength(50);
            entity.Property(e => e.LastName).HasMaxLength(50);
            entity.Property(e => e.Mobile).HasMaxLength(20);
            entity.Property(e => e.Pin)
                .IsRequired()
                .HasMaxLength(50);
            entity.Property(e => e.UpdatedDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<UserPhoto>(entity =>
        {
            entity.ToTable("UserPhoto");

            entity.Property(e => e.Id).HasDefaultValueSql("(newid())");
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.FileName)
                .IsRequired()
                .HasMaxLength(100);
            entity.Property(e => e.Photo).IsRequired();
            entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

            entity.HasOne(d => d.User).WithMany(p => p.UserPhotos)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserPhoto_User");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
