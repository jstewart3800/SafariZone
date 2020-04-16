using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SafariAPI.Services;
using SafariAPI.Services.Context;

namespace SafariAPI
{
   public class Startup
   {
      public Startup(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      public void ConfigureServices(IServiceCollection services)
      {
         services.AddControllers();

         services.AddScoped<LoginService>();

         services.AddCors(options =>
         {
            options.AddPolicy("CorsPolicy",
            builder => builder.WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials());
         });

         var connectionString = Configuration.GetConnectionString("NameOfMyConnectionString");
         services.AddDbContext<LoginContext>(options => options.UseSqlServer(connectionString));
      }
      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
         }

         // app.UseHttpsRedirection();

         app.UseRouting();
         app.UseCors("CorsPolicy");

         app.UseAuthorization();

         app.UseEndpoints(endpoints =>
         {
            endpoints.MapControllers();
         });
      }
   }
}
