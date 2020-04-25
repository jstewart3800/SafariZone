using Microsoft.EntityFrameworkCore.Migrations;

namespace SafariAPI.Migrations
{
    public partial class init3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userId",
                table: "PokeLogsSql");

            migrationBuilder.AddColumn<string>(
                name: "userEmail",
                table: "PokeLogsSql",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "PokeLogsSql",
                keyColumn: "id",
                keyValue: 1,
                column: "userEmail",
                value: "example@example.com");

            migrationBuilder.UpdateData(
                table: "PokeLogsSql",
                keyColumn: "id",
                keyValue: 2,
                column: "userEmail",
                value: "example2@example.com");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userEmail",
                table: "PokeLogsSql");

            migrationBuilder.AddColumn<int>(
                name: "userId",
                table: "PokeLogsSql",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "PokeLogsSql",
                keyColumn: "id",
                keyValue: 1,
                column: "userId",
                value: 1);

            migrationBuilder.UpdateData(
                table: "PokeLogsSql",
                keyColumn: "id",
                keyValue: 2,
                column: "userId",
                value: 2);
        }
    }
}
