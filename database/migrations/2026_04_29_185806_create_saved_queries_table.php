<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('saved_queries', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('name');
            $table->text('yaml_payload');
            $table->timestamp('last_used_at')->nullable();
            $table->json('project_context')->nullable();
            $table->foreignUuid('source_query_id')->nullable()->constrained('saved_queries')->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('saved_queries');
    }
};
