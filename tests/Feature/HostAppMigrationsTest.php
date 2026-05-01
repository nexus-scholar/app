<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;

uses(RefreshDatabase::class);

it('creates the host app schema required by the core package', function (): void {
    expect(Schema::hasTable('users'))->toBeTrue();
    expect(Schema::hasTable('projects'))->toBeTrue();
    expect(Schema::hasTable('project_user'))->toBeTrue();
    expect(Schema::hasTable('saved_queries'))->toBeTrue();
    expect(Schema::hasTable('audit_logs'))->toBeTrue();
    expect(Schema::hasTable('notification_events'))->toBeTrue();
    expect(Schema::hasTable('export_history'))->toBeTrue();

    expect(Schema::hasColumn('projects', 'owner_user_id'))->toBeTrue();
    expect(Schema::hasColumn('saved_queries', 'user_id'))->toBeTrue();
    expect(Schema::hasColumn('saved_queries', 'name'))->toBeTrue();
    expect(Schema::hasColumn('saved_queries', 'yaml_payload'))->toBeTrue();
    expect(Schema::hasColumn('saved_queries', 'last_used_at'))->toBeTrue();
    expect(Schema::hasColumn('saved_queries', 'project_context'))->toBeTrue();
    expect(Schema::hasColumn('saved_queries', 'source_query_id'))->toBeTrue();

    expect(Schema::hasColumn('audit_logs', 'project_id'))->toBeTrue();
    expect(Schema::hasColumn('audit_logs', 'user_id'))->toBeTrue();
    expect(Schema::hasColumn('audit_logs', 'event_type'))->toBeTrue();
    expect(Schema::hasColumn('audit_logs', 'payload'))->toBeTrue();

    expect(Schema::hasColumn('notification_events', 'user_id'))->toBeTrue();
    expect(Schema::hasColumn('notification_events', 'type'))->toBeTrue();
    expect(Schema::hasColumn('notification_events', 'title'))->toBeTrue();
    expect(Schema::hasColumn('notification_events', 'body'))->toBeTrue();
    expect(Schema::hasColumn('notification_events', 'is_read'))->toBeTrue();
    expect(Schema::hasColumn('notification_events', 'action_data'))->toBeTrue();

    expect(Schema::hasColumn('export_history', 'user_id'))->toBeTrue();
    expect(Schema::hasColumn('export_history', 'project_id'))->toBeTrue();
    expect(Schema::hasColumn('export_history', 'format'))->toBeTrue();
    expect(Schema::hasColumn('export_history', 'parameters'))->toBeTrue();
    expect(Schema::hasColumn('export_history', 'file_path'))->toBeTrue();
    expect(Schema::hasColumn('export_history', 'file_size_bytes'))->toBeTrue();
});
