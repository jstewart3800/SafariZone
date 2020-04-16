using Microsoft.EntityFrameworkCore.Migrations;

namespace SafariAPI.Migrations
{
    public partial class initialize : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserInfoSql",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    emailAddress = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserInfoSql", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "UserInfoSql",
                columns: new[] { "id", "emailAddress", "password" },
                values: new object[] { 1, "JonStewart@example.example", "password" });

            migrationBuilder.InsertData(
                table: "UserInfoSql",
                columns: new[] { "id", "emailAddress", "password" },
                values: new object[] { 2, "bigstinkus@stink.stank", "trash" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserInfoSql");
        }
    }
}
